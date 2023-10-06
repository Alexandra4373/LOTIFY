import Saly from "./assets/Saly.png";
import Facebook from "./assets/Facebook.png";
import Apple from "./assets/apple.png";
import Google from "./assets/google.png";

function App() {
  return (
    <>
      <div className="bg-[#fff] ">
        <div className="">
          <h3>Your logo</h3>
        </div>
        <div className="flex gap-10">
          <div className="">
            <h2>Sign in to</h2>
            <h4>Lorem Ipsum is simply</h4>
          </div>
          <div className="flex-1">
            <h5>Sign in</h5>
            <div className="">
              <label>
                <input
                  type="text"
                  placeholder="Enter email or user name"
                ></input>
              </label>
            </div>

            <div className="">
              <label>
                <input type="text" placeholder="Password"></input>
              </label>

              <p>Forgot password?</p>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="flex-1">
            <p>
              If you don't have an account <br />
              You can <span>Register here!</span>
            </p>
          </div>
          <div className="flex-1">
            <img src={Saly} />
          </div>
          <div className="flex-1">
            <button type="button">Login</button>
            <div className="">
              <p>or continue with</p>
              <div className="flex ">
                <img src={Facebook} />
                <img src={Apple} />
                <img src={Google} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
