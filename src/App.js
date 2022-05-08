import './App.css';
import Blog from './Components/Blog';
import ColorBox from './Components/ColorBox';



const App = () => {


  return (
    <div className='App theme-white'>
      <h1><a href="https://vedabase.io/en/library/ssr/1/">🔗 Learning the science of source</a></h1>
      <div className='color-container'>
        <ColorBox color={'white'} />
        <ColorBox color={'black'} />
        <ColorBox color={'purple'} />
        <ColorBox color={'green'} />
      </div>
      <Blog theme={"white"}/>
    </div>
  );
}

export default App;
