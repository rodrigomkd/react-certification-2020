import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useAuth } from '../../providers/Auth';

const ModalComponent = ({ isShowing, hide, theme }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const { login } = useAuth();

  const mockedUser = {
    id: '123',
    name: 'Wizeline',
    avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  };
  
  function loginApi(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'wizeline' && password === 'Rocks!') {
          return resolve(mockedUser);
        }
        return reject(new Error('Username or password invalid'));
      }, 500);
    });
  }

  const auth = () => {
    loginApi(username, password).then(response => {
      hide();
      login();
    }).catch(error => {
      setError(true);
      console.error(error);
    });
  }

  return (
    isShowing ?
    ReactDOM.createPortal(
      
      <React.Fragment> 
        <div className="modal-overlay"/>
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className={theme === "dark" ? "modal-dark" : "modal"}>
            <div className="modal-header">
              <h2 className="modal-title">Login</h2>
              <br />             
            </div>
            <div>
              
              {error ? 
                <div>
                  <div className="errorMessage">Username or password invalid</div>
                </div>             
              :
                null
              }
                            
            </div>
            <div>           
              <input placeholder="Username" type="text" value={username} class="modal-input" onChange={e => setUsername(e.target.value)}  />
              <br />
              <input placeholder="Password" type="password" class="modal-input" onChange={e => setPassword(e.target.value)} ></input>
              <br />
              <div className="modal-buttons">
                <span class="modal-button" onClick={hide}>Cancel</span>
                <span class="modal-button" onClick={auth}>Login</span>
              </div>
              
            </div>
          </div>
        </div>
      </React.Fragment>, document.body
    )  : null
    );
}
/*
const ModalComponent = ({ isShowing, hide, login }) => isShowing ? ReactDOM.createPortal(
  
  <React.Fragment>

    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <h2>Login</h2>
          <br />
          
        </div>
        <div>
        
          <input placeholder="Password" type="text" class="modal-input"  />
          <br />
          <input placeholder="Username" type="password" class="modal-input" ></input>
          <br />
          <div className="modal-buttons">
            <span class="modal-button" onClick={hide}>Cancel</span>
            <span class="modal-button" onClick={login}>Login</span>
          </div>
          
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;
*/
export default ModalComponent;