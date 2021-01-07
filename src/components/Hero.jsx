export const Hero = ({ menu, logo }) => {
  return (
    <section id='portada' className='portada background'>
      <header id='header' className='header contenedor'>
        <figure className='logotipo'>
          <img src={logo} width='186' height='60' alt='Invie logotipo' />
        </figure>
        <span className='burguer-button icon-menu' id='burguer-button'></span>
        <nav className='menu' id='menu'>
          <ul>
            {menu.map((item) => (
              <li>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className='contenedor'>
        <h1 className='titulo'>
          Guitarras <span>invie</span>sibles
        </h1>
        <h3 className='title-a'>
          Sé la estrella de rock que siempre quisiste ser
        </h3>
        <a className='button' href='#guitarras'>
          Conoce mas
        </a>
      </div>
    </section>
  );
};
