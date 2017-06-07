import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Pages from './pages/index';
import layout from './layout.html';

import messages from './messages.json';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const domain = IS_PRODUCTION
  ? 'https://javialej-react-sfs.now.sh'
  : 'http://localhost:3001';

function requestHandler(request, response) {
  const locale = request.headers['accept-language'].indexOf('es') >= 0 ? 'es' : 'en';
  const context = {};

  let html = renderToString(
    <IntlProvider locale={locale} messages={messages[locale]}>
      <StaticRouter location={request.url} context={context}>
        <Pages />
      </StaticRouter>
    </IntlProvider>,
  );

  response.setHeader('Content-Type', 'text/html');

  if (context.url) {
    response.writeHead(301, {
      Location: context.url,
    });
    return response.end();
  }

  if (context.url) {
    response.writeHead(404);

    html = renderToString(
      <IntlProvider locale={locale} messages={messages[locale]}>
        <StaticRouter location={request.url} context={context}>
          <Pages />
        </StaticRouter>
      </IntlProvider>,
    );
  }

  response.write(
    layout({ content: html, title: 'Aplicación', domain }),
  );

  return response.end();
}

const server = http.createServer(requestHandler);

server.listen(process.env.PORT || 3000);
