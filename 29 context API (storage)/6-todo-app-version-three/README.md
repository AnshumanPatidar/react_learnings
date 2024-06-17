# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

in this chapter

CONTEXT API

1. WHY TO USE CONTEXT API
   agr conponent me bhut saara data travel ho rha h
   or data jo h vo component ke tree me deep traveling kr rha h differnt components me
   toh apn DATA ek jgaah rkh skte h CONTEXT API ME
2. REMEMBER
   context API me kosis kre ki data jo aap store kr rhe ho vo esa data ho jo jyada change na ho rha ho
3. first create context API
   location : /store / todo-item-store.jsx
   make a different folder name "store" as per the react industries but not compulsory
   import createContext from react
   store the createContext to a variable and export it
   ex .. export element = createContext(default_value)
   // NOTE it is not compulsury to give default_value but for the suggestion to come when you write code , you can give value

   location app.jsx
   To make Context available for your desired component
   we use < export_name.Provider >components< /export_name.Provider >
   //remenber to import it first

   . useContext hook is used to take the data inside the Context API

// DISADVANTAGE OF API CONTEXT
. whenever the data in the context updates it will repaint the whole component
. you have to choose when its fits more to use context or state

// Notes

. Prop Drilling : Context API addresses prop drilling , component composition is an alternative
. folder setup : Use a store folder for context flies.
. Intialize : Use React.createContext with initial state and export it.
. Provider : Implement with contextName.Provider in components.
. Access value : Use the useContext hook
. Dynamic Data : combine context with state
. Export Functions: Context can also export Function for actions
. Logic Seperation : This helps keep the UI and business logic seperate from each other.
