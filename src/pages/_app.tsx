import { AppProps } from 'next/app';
import '../styles/global.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <DndProvider backend={HTML5Backend}>
    <Component {...pageProps} />
  </DndProvider>
);

export default MyApp;
