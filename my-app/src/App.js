import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._selectFile = this._selectFile.bind(this);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    const body = {file: this.state.file.name, imagePreviewUrl: this.state.imagePreviewUrl}
    fetch('/pictures', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

  _selectFile(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt='unable to upload'/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Eating your way through Manhattan</h1>
        </header>
        <p className="App-intro">
        Explore the city through food, one plate at a time
        </p>
        <ul className="list">
          <li> Save your personal favorites </li>
          <li> Create your own lists </li>
          <li> find new discoveries </li>
        </ul>
        <p className="footer"> 
          Bringing a community of foodies together to explore one of the most diverse cities out there.
        </p>
        
        <div className="previewComponent">
          <form>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._selectFile(e)} />
            <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
  
      </div>
    );
  }
}

export default App;
