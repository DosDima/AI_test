# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

Создать на nuxt js(https://nuxtjs.org/) приложение, состоящие из 3х страниц: 1 страница содержит форму. Форма содержит поле в которое можно ввести число, в том числе и дробь (1...5...n, 1/2....1/25....4/5....n1/n2), после заполнения поля, ниже появляется аналогичное поле. После всех полей выдается подсчет суммы всех полей (1+1/2=1.5) Подсчет должен осуществляться реактивно. 2 страница содержит кнопку далее. По нажатии кнопки далее появляется поле "Фамилия". После заполнения поле "Фамилия" меняется на поле "Имя". После заполнения поля "Имя", открывается модальное окно с полем "Телефон" и кнопкой закончить. После нажатия этой кнопки, происходит переход на 3 страницу где отображаются все введенные данные.

## Setup
Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
