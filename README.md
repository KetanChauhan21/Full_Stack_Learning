# this is react learning 
# chapter 1 - Learning Basic

# Parcel
- dev Build
- Local Server
- HMR = Hot Module Replacement
- parcel use file watching algorithm - written in C++
- caching - fast build 
- image optimization
- minification
- Building
- Compressing
- Consistent hashing
- code splitting
- difference Bundling
- diagnostic
- Error handling
- HTTPS
- Tree Shaking - remove unused code
- diff Build for dev and production



# React component vs react element

<!-- this is the the react element -->
const element1 = <h1>this is react element</h1>;

<!-- this it the react component -->
const ReactComponent = () => {
  return (
    <div>
      {element1}
      <p>this is ReactComponent ❤️❤️❤️❤️❤️</p>
    </div>
  );
};
