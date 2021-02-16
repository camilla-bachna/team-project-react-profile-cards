import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header class="header central-column">
        <img
          class="header__logo"
          src="./assets/images/logo-tree2GIF.gif"
          alt="logo awesome cards"
        />
      </header>
      <main class="main-cards">
        <div class="main-cards__sections">
          <section class="photo">
            <div class="photo-container">
              <div class="photo-button ">
                <button class="photo-button__link js-reset">Reset</button>
                <i class="fa fa-trash" aria-hidden="true"></i>
              </div>

              <article class="photocard js-card palette-1">
                <div class="container">
                  <div class="tittlescontainer">
                    <h2 class=" photocard__title js-preview-name js-card-name js-input-text">
                      Nombre apellido
                    </h2>
                    <p class=" photocard__title2 js-preview-position js-card-job js-input-text">
                      Front-end developer
                    </p>
                  </div>
                </div>
                <div class="photocard__img js__profile-image"></div>
                <ul class="photocard__list">
                  <li class="photocard__list--item">
                    <a
                      href=""
                      class=" photocard__list--link icon fa fa-mobile js-card-phone  js-input-text"
                    ></a>
                  </li>

                  <li class="photocard__list--item">
                    <a
                      href=""
                      class=" photocard__list--link icon fa fa-envelope js-card-email  js-input-text"
                    ></a>
                  </li>

                  <li class="photocard__list--item">
                    <a
                      href=""
                      class=" photocard__list--link js-card-linkedin icon fa fa-linkedin  js-input-text"
                    ></a>
                  </li>
                  <li class="photocard__list--item">
                    <a
                      href=""
                      class=" photocard__list--link js-card-github icon fa fa-github-alt  js-input-text"
                    ></a>
                  </li>
                </ul>
              </article>
            </div>
          </section>
          <form class="main-cards__sections--form">
            <section class=" js-collapsable-container">
              <h2 class="section-title js-collapsable-header">
                <div class="title-icon">
                  <span class="article__list--icon fas fa fa-object-ungroup "></span>
                  <span class="title">Diseña</span>
                </div>
                <span class="">
                  <i class="fa fa-leaf" aria-hidden="true"></i>
                </span>
              </h2>

              <div class="design hidden__container collapsable--close">
                <h3 class="design__title">Colores</h3>
                <div>
                  <div class="design__palette">
                    <label class="design__label">
                      <input
                        class=" design__radio js-palette js-paletteDefault"
                        type="radio"
                        name="palette"
                        value="1"
                        checked
                      />
                      <ul class="design__square palette-1">
                        <li class="design__square--color color1">Color 1</li>
                        <li class="design__square--color color2">Color 2</li>
                        <li class="design__square--color color3">Color 3</li>
                      </ul>
                    </label>
                  </div>
                  <div class="design__palette">
                    <label class="design__label">
                      <input
                        class=" design__radio js-palette"
                        type="radio"
                        name="palette"
                        value="2"
                      />
                      <ul class="design__square palette-2">
                        <li class="design__square--color color1">Color 1</li>
                        <li class="design__square--color color2">Color 2</li>
                        <li class="design__square--color color3">Color 3</li>
                      </ul>
                    </label>
                  </div>
                  <div class="design__palette">
                    <label class="design__label">
                      <input
                        class=" design__radio js-palette"
                        type="radio"
                        name="palette"
                        value="3"
                      />
                      <ul class="design__square  palette-3">
                        <li class="design__square--color color1">Color 1</li>
                        <li class="design__square--color color2">Color 2</li>
                        <li class="design__square--color color3">Color 3</li>
                      </ul>
                    </label>
                  </div>
                  <div class="design__palette">
                    <label class="design__label">
                      <input
                        class=" design__radio js-palette"
                        type="radio"
                        name="palette"
                        value="4"
                      />
                      <ul class="design__square palette-4">
                        <li class="design__square--color color1">Color 1</li>
                        <li class="design__square--color color2">Color 2</li>
                        <li class="design__square--color color3">Color 3</li>
                      </ul>
                    </label>
                  </div>
                </div>
              </div>
            </section>
            <section class="fill js-collapsable-container collapsable--close">
              <h2 class="section-title js-collapsable-header">
                <div class="title-icon">
                  <span class="article__list--icon fas fa fa-keyboard-o"></span>
                  <span class="title">Rellena</span>
                </div>
                <span class="">
                  <i class="fa fa-leaf" aria-hidden="true"></i>
                </span>
              </h2>

              <div class="hidden__container fill__form">
                <label class="fill__form--labels" for="fullName">
                  Nombre completo*
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Ej: Sally Jill"
                  class="fill__form--inputs js-name js-input-name js-input-text"
                />
                <label class="fill__form--labels" for="position">
                  Puesto*
                </label>
                <input
                  id="position"
                  type="text"
                  name="position"
                  placeholder="Ej: Front-end unicorn"
                  class="fill__form--inputs js-position js-input-job js-input-text"
                />
                <div class="fill__form--image-profile">
                  <span class="fill__form--labels">Imagen de perfil*</span>

                  <div class="button-box-container">
                    <label
                      class="fill__form--button js__profile-trigger"
                      for="add"
                    >
                      Añadir imagen
                    </label>
                    <input
                      type="file"
                      name=""
                      id="add"
                      class="js__profile-upload-btn"
                    />
                    <span class="fill__form--box js__profile-preview"></span>
                  </div>
                </div>
                <label class="fill__form--labels" for="">
                  Email*
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="emailAddress"
                  placeholder="Ej: sally-hill@gmail.com"
                  class="fill__form--inputs js-input-email js-input-text"
                  value=" "
                />
                <label class="fill__form--labels" for="telephone">
                  Teléfono*
                </label>
                <input
                  id="telephone"
                  type="tel"
                  name="telephone"
                  placeholder="Ej: 555-55-55-55"
                  class="fill__form--inputs js-input-phone js-input-text"
                />

                <label class="fill__form--labels" for="linkedin">
                  Linkedin*
                </label>
                <input
                  id="linkedin"
                  type="url"
                  name="linkedin"
                  placeholder="Ej: linkedin.com/in/sally.hill"
                  class="fill__form--inputs js-input-linkedin js-input-text"
                />

                <label class="fill__form--labels" for="github">
                  Github*
                </label>
                <input
                  id="github"
                  type="url"
                  name="github"
                  placeholder="Ej: @sally-hill"
                  class="fill__form--inputs js-input-github js-input-text "
                />
              </div>
            </section>
            <section class="sharecards js-collapsable-container collapsable--close">
              <h2 class="section-title js-collapsable-header">
                <div class="title-icon">
                  <span class="article__list--icon fas fa fa-share-alt"></span>
                  <span class="title">Comparte</span>
                </div>
                <span class="">
                  <i class="fa fa-leaf" aria-hidden="true"></i>
                </span>
              </h2>
              {/*Share open*/}

              <div class="section__share__container hidden__container">
                <button class="button__create js-create-btn js-collapsable-container js-hidden">
                  <i class="fa fa-address-card-o" aria-hidden="true"></i>Crear
                  tarjeta
                </button>

                <div class="section__share__create js-card-result js-hidden-collapsable hidden"></div>
              </div>
            </section>
          </form>
        </div>
      </main>
      <footer class="footer">
        <small class="footer__small">Tree profile-cards @2021</small>
        <img
          class="footer__img"
          src="./assets/images/logo-adalab.png"
          alt="logo adalad"
        />
      </footer>
    </div>
  );
}

export default App;
