# TitanEdge | Landing Page de Engenharia

Uma landing page institucional responsiva para a **TitanEdge**, empresa fictícia de engenharia, automacao e solucoes para os setores de energia, oleo e gas. O projeto foi construido para apresentar servicos complexos de forma clara, com navegacao direta e uma experiencia visual consistente em desktop e dispositivos moveis.

## Visao do projeto

O desafio deste projeto foi transformar um posicionamento B2B tecnico em uma experiencia digital objetiva: comunicar areas de atuacao, servicos especializados, credenciais e meios de contato sem sobrecarregar a navegacao.

O resultado e uma single-page application que prioriza:

- Hierarquia visual para conteudo institucional e comercial.
- Layout responsivo com menu de navegacao para telas menores.
- Conteudo organizado em componentes reutilizaveis e isolados por dominio.
- Interacoes pequenas, mas funcionais, como rolagem suave e inscricao na newsletter.
- Consideracao de acessibilidade com rotulos ARIA, formulario semantico e suporte a `prefers-reduced-motion`.

## Funcionalidades

| Area | Implementacao |
| --- | --- |
| Hero | Apresenta a proposta de valor, CTA com rolagem suave e faixa animada de clientes e parceiros. |
| Navegacao | Menu responsivo controlado por estado React, com fechamento apos selecionar um destino. |
| Conteudo institucional | Exibe visao, missao, valores, areas de negocio e linha do tempo da empresa. |
| Catalogo de servicos | Organiza especialidades de engenharia, procurement e servicos de campo em cards com rolagem horizontal. |
| Conversao | Disponibiliza CTAs por `mailto:` e formulario de newsletter com validacao nativa de e-mail. |
| Persistencia local | Armazena o e-mail inscrito em `localStorage`; nao existe backend ou envio real de e-mail. |
| Experiencia inclusiva | Reduz animacoes quando a preferencia do sistema indica reducao de movimento. |

## Stack tecnica

- **React 19** para composicao da interface e gerenciamento de estado local.
- **TypeScript** para tipagem dos dados de servicos e marcos da empresa.
- **Vite 8** para desenvolvimento local e build de producao.
- **CSS Modules** para encapsular estilos por componente e evitar conflitos de escopo.
- **ESLint** para analise estatica do codigo.

## Arquitetura

Os componentes foram separados por secoes da experiencia, mantendo conteudo, comportamento e estilos proximos entre si:

```text
src/
├── App.tsx                       # Composicao da pagina
├── App.css                       # Estilos globais e preferencia de movimento
└── components/
    ├── Header/                   # Navegacao desktop e mobile
    ├── Hero/                     # Proposta de valor e CTA principal
    ├── Section/                  # Visao, missao e valores
    ├── Business/                 # Frentes de negocio
    ├── Services/                 # Servicos e linha do tempo
    ├── TrustFooter/              # Credenciais, CTA e newsletter
    └── CookieConsent/            # Aviso de consentimento
```

Cada pasta de componente contem o arquivo `.tsx` e seu respectivo `.module.css`, o que torna a manutencao visual mais previsivel e escalavel.

## Decisoes de engenharia

- **Dados em arrays tipados:** servicos, valores, certificacoes e marcos sao renderizados com `map`, reduzindo duplicacao e facilitando futuras alteracoes de conteudo.
- **Estado somente onde necessario:** o React controla exclusivamente o menu mobile e o retorno visual do formulario de newsletter, mantendo a interface simples.
- **Componentizacao por secao:** cada bloco da landing page possui uma responsabilidade clara, o que facilita revisao, evolucao e reutilizacao.
- **Progressive enhancement:** animacoes de entrada usam recursos modernos quando disponiveis, sem impedir a leitura do conteudo em navegadores que nao os suportam.

## Como executar localmente

### Pre-requisitos

- Node.js 20 ou superior
- npm 10 ou superior

### Instalacao e desenvolvimento

```bash
npm install
npm run dev
```

O Vite exibira no terminal a URL local para abrir a aplicacao.

### Validacao e build de producao

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` executa a verificacao de tipos com TypeScript antes de gerar os arquivos otimizados em `dist/`.

## Pontos de evolucao

- Conectar o formulario de newsletter a uma API e a uma plataforma de e-mail marketing.
- Implementar uma camada de consentimento de cookies que persista a escolha do visitante.
- Hospedar imagens em um CDN proprio e incluir `alt` descritivo quando forem usadas como conteudo, nao apenas decoracao.
- Adicionar testes de componentes e testes end-to-end para os fluxos de navegacao e newsletter.
- Integrar dados institucionais a um CMS para que a equipe de negocio atualize o conteudo sem alterar codigo.

## Autoria

Projeto de interface desenvolvido como demonstracao de habilidades em **React, TypeScript, responsividade, arquitetura de componentes e experiencia de usuario para contextos B2B**.
