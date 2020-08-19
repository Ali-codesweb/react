import React from 'react';
import './App.css';

//Components
// import Mycomp from './components/greet'
// import Welcome from './components/welcome'
// import Hello from './components/hello'
// import Message from './components/messsage'
// import Counter from './components/counter'
// import Click from './components/functionClick'
// import ClassCLick from './components/classClick'
// import EventBind from './components/eventBind'
// import Parentcomponent from './components/parentcomponent'
// import UserGreeting from './components/usergreeting'
// import NameList from './components/nameList'
// import Style from './components/stylesheet'
// import Inline from './components/inline'
// import './appStyles.css'
// import success from './appStyles.module.css'
//import Form from './components/form'
//import Lifecycle from './components/LifeCycleA'
import Fragments from './components/fragments'
import Tables from './components/Tables'
import Purecomponent from './components/Purecomponent'
import Parentcomp from './components/ParentComponent2'
import Refs from './components/refsMemo'
import InputRef from './components/focusInput'
import Frparent from './components/frparent'
import PortalDemo from './components/portalDemo'
import Hero from './components/hero'
import ErrorBoundry from './components/ErrorBoundry'
import Clickcounter from './components/clickCounter'
import HoverCOunt from './components/hoverCounter'


function App() {
  return (
    <div className="App">
      {/* This is Functional Component */}
      {/* <Mycomp name="Aliasgar Quaid johar Burhani" heroname="Thor">
        <p>This is children props</p>
        <button>This is button</button>
      </Mycomp>
      {/* This is Class component */}
     {/* <Welcome name="Taher" heroname="Batman" /> */}
     {/* This is without JSX */}
    {/* <Hello name="Mohammed" />

    <Message/>
    <Counter/> */}
    {/* Click and class click are same but with different approaches, functional and class components */}
    {/* <Click/>
    <ClassCLick/> */}
    
    {/* <EventBind/>
    <Parentcomponent/>
    <UserGreeting/>
    <NameList/>
    <Style primary = {false}/>
    <Inline/> */}
    {/* <h1 className='error'>Error</h1>
    <h1 className={success.success}>Success</h1>  */}
  {/* <Form/> */}
  {/* <Lifecycle/> */}
  {/* <Fragments/>
  <Tables/> */}
  {/* <Parentcomp/> */}
    {/* <Refs/> */}
    {/* <InputRef/> */}
    {/* <Frparent/> */}
    {/* <PortalDemo/> */}
    {/* <ErrorBoundry>
    <Hero heroName='Batman'/>
    </ErrorBoundry>
    <ErrorBoundry>
    <Hero heroName='Superman'/>
    </ErrorBoundry>
    <ErrorBoundry>
    <Hero heroName='Joker' />
    </ErrorBoundry> */}
    <Clickcounter name="Burhani"/>
    <HoverCOunt/>
    </div>
  );
}

export default App;
