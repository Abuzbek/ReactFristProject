import React from 'react';
import './App.css';
// ========= components ===========
import Header from "./components/header";
import 'bootstrap/dist/css/bootstrap.css'
class App extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      items : [
        {
          name: 'Hello',
          done: false
        },
        {
          name: 'asdadasd',
          done: false
        },
        {
          name: 'How old',
          done: true
        }
      ]
  }
    this.submit = this.submit.bind(this);
  }
  submit(e){
    e.preventDefault();
    this.state.items.push({
      name: document.querySelector('#name').value,
      done: document.querySelector('#sum').checked
    })
    console.log(this.state.items);
  }
  render() {
     let style={
      boxShadow: 'none'
     }
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <form className="text-center col-md-6 m-auto" onSubmit={(e)=>{e.preventDefault()}}>
              <input type="text" id="name" className="form-control my-3"/>
              <input type="checkbox" id="sum" className={"form-control my-3"} style={style} />
              <button type="submit" onClick={this.submit} className="btn btn-success">Push</button>
            </form>
          </div>
        </div>
        <Header name={this.state.items} />
      </div>
    );
  }
}

export default App;
