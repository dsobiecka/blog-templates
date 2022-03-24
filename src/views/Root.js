import { theme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        test
      </div>
    </ThemeProvider>
  );
}

export default Root;
