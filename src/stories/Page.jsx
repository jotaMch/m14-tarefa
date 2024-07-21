import React from 'react';
import { Header } from './Header';
import './page.css';

/**
 * Componente de exemplo para representar páginas no Storybook.
 */
export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => {
  const [currentUser, setUser] = React.useState(user);

  return (
    <article>
      <Header
        user={currentUser}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="storybook-page">
        <h2>Páginas no Storybook</h2>
        <p>
          Recomendamos construir interfaces com um processo orientado a{' '}
          <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
            <strong>componentes</strong>
          </a>{' '}
          começando com componentes atômicos e terminando com páginas completas.
        </p>
        <p>
          Renderize páginas com dados fictícios. Isso facilita a construção e revisão de estados de
          página sem precisar navegar até elas em seu aplicativo. Aqui estão alguns padrões úteis
          para gerenciar dados de página no Storybook:
        </p>
        <ul>
          <li>
            Use um componente conectado em um nível mais alto. O Storybook ajuda a compor esses
            dados a partir dos "args" dos stories dos componentes filhos.
          </li>
          <li>
            Monte dados no componente de página a partir dos seus serviços. Você pode simular esses
            serviços no Storybook.
          </li>
        </ul>
        <p>
          Obtenha um tutorial guiado sobre desenvolvimento orientado a componentes em{' '}
          <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
            Tutoriais do Storybook
          </a>
          . Leia mais na{' '}
          <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
            documentação
          </a>
          .
        </p>
        <div className="tip-wrapper">
          <span className="tip">Dica</span> Ajuste a largura do canvas com o{' '}
          <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Addon de Viewports na barra de ferramentas
        </div>
      </section>
    </article>
  );
};
