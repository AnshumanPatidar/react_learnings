# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) htmlFor Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) htmlFor Fast Refresh

we learnt that

1. Fetch is used for "POST" method
   that takes path , object {}
   in that object we have
   . method:"POST",
   header : { what type of data you are sending}
   body:{
   your data
   }

   // remember your not allowed to give body while using "GET"

as a response we get the data that we have sended
and we passed that data to the addpost method

2. we changed the postion of useEffect that we were using for loading state and fetching intial data from the server , the problem with this was every time i was switching from create post to home , the useEffect was being painted again and again
   so we moved the whole code of useEffect from postlist to the store so that it will paint just ones thats it
   and removed addintiallist method from the props we are passing from the store and added fetching , so that loading state can be accessed by whoever needed

3. we use routing and useNavigate()
