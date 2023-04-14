import { NavBar } from "./components/NavBar";
import "./App.css";

import logo from "./assets/images/logoNCC.png";
import css from "./assets/images/css-icon.png";
import html from "./assets/images/html-icon.png";
import url from "./assets/images/url-icon.png";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <sidebar>
          <div className="sidenav">
            <a href="#about">Home</a>
            <a href="#services">Service</a>
            <a href="#clients">Blog</a>
            <a href="#ontact">Contact</a>
          </div>
        </sidebar>
        <content>
          <div className="logo">
            <img src={logo} />
          </div>

          <div className="content-detail">
            <div className="content-title">Lorem ipsum dolor sit asmet?</div>
            <div className="content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </div>
          </div>

          <div className="list-item">
            <div className="card-item">
              <p>Lorem ipsum dolor sit amet</p>
              <img className="card-image" src={css} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
            <div className="card-item">
              <p>Lorem ipsum dolor sit amet</p>
              <img className="card-image" src={html} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
            <div className="card-item">
              <p>Lorem ipsum dolor sit amet</p>
              <img className="card-image" src={url} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
          </div>
        </content>
        <footer>
          <p className="footer">Copyright © 2021</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
