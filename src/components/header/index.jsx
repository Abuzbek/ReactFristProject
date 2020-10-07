import React from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css'
class Header extends React.Component {
//   constructor(props) {
//     super(props)
//     this.change = this.change.bind(this)
//   }
  render() {
    return (
      <div className="header">
          <div className="container">
              <div className="row">
                  <div className="col-5 m-auto">
                  <ul className="list-group">
                        {
                            this.props.name.map((item,index)=>(
                                <li 
                                key={index}
                                className={item.done
                                    ? "list-group-item list-group-item-warning done"
                                    : "list-group-item list-group-item-warning"} 
                                >
                                    <input readOnly type="checkbox" 
                                    className="mr-3" 
                                    checked={item.done} 
                                    />
                                    <span>{item.name}</span>
                                    
                                </li>
                            ))
                        }
                        
                    </ul>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Header;
