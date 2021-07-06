import Routes from '@constants/routes';

const DEFAULT_ES = {
  App: {
    [Routes.Home]: 'Home',
    [Routes.Information]: 'Información',
    [Routes.PlaygroundStack]: 'Playground',
    [Routes.Playground]: 'Playground',
    [Routes.ZerfWeb]: 'Zerf Web'
  },
  Information: {
    Welcome: 'Bienvenidos al Bootstrap de React Native'
  },
  Playground: {
    Text: 'Este es un texto',
    Button: 'Este es un botón y abre el Webview',
    Card: 'Esto es una card',
    TextInput: 'Este es un TextInput',
    TextInputResult: 'Resultado del TextInput',
    ProgressBar: 'Esta es una ProgressBar',
    Carousel: 'Este es un Carousel',
    ExampleModal: 'Este es un Modal',
    OpenExampleModal: 'Abrir el Modal de ejemplo',
    CloseExampleModal: 'Cerrar'
  }
};

export default DEFAULT_ES;
