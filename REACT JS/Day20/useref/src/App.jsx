// Task-1
import { useRef } from "react";

const App = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const clearInputs = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  const handleSubmit = () => {
    alert(
      "Name: " + nameRef.current.value +
      "\nEmail: " + emailRef.current.value
    );
  };

  return (
    <div>
      <h1>Input Focus and Clear</h1>

      <input ref={nameRef} type="text" placeholder="Enter Name" />
      <br /><br />

      <input ref={emailRef} type="email" placeholder="Enter Email" />
      <br /><br />

      <button onClick={() => nameRef.current.focus()}>
        Focus Name
      </button>

      <button onClick={() => emailRef.current.focus()}>
        Focus Email
      </button>

      <button onClick={clearInputs}>Clear</button>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;



// import { useRef } from "react";

// const App = () => {
//   const passwordRef = useRef(null);
//   console.log(passwordRef);
  

//   const showPassword = () => {
//     passwordRef.current.type = "text";
//   };

//   const hidePassword = () => {
//     passwordRef.current.type = "password";
//   };

//   return (
//     <div>
//       <h1>Password Show / Hide</h1>

//       <input
//         ref={passwordRef}
//         type="password"
//         placeholder="Enter Password"
//       />

//       <br /><br />

//       <button onClick={showPassword}>Show</button>

//       <button onClick={hidePassword}>Hide</button>
//     </div>
//   );
// };

// export default App;

