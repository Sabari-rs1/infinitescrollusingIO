import React, {Component} from 'react'
var randomWords = require('random-words');

class App extends Component{
    constructor()
    {
        super();
        this.state = {
            url : []
        }
        this.observer = null;
        
    }
    
    ref = React.createRef();
   

    componentDidMount()
    {
        this.observer = new IntersectionObserver(([e]) =>{
        
        if (e.intersectionRatio>0)
        {
            this.getNewImage();     
        }},
        {
            threshold : 1
        });
        this.observer.observe(this.ref.current) ;
    }


    getNewImage()
    {
    let keyword=randomWords();
    let newurl="https://api.giphy.com/v1/gifs/search?api_key=bAK3lUZJd4RlBw8fyq6Cq8WYEmMiZAlp&limit=1&q=";
    newurl=newurl.concat(keyword);
    fetch(newurl).then(res=> res.json()).then(content=>
    {
    let newimgurl= content.data[0].images.downsized.url;
    const arr = [...this.state.url,newimgurl]
    this.setState({url : arr});  
    }); 
    }


    render()
    {
        return (
            <div>
            <h1>
                Infinite Scroll using IO
            </h1>
            <div>
             {
                this.state.url.map((url,index) =>
                {
                return (<div key={ index } newref={(input)=>{this.divitem=input}}>
                    <img src = { url }  style={{height:"800px",width:"100%" }} alt = "img not loaded"/>
                </div>)
                }
                )
            }
            </div>
            <footer ref={this.ref}>
                Loading
            </footer>
            </div>
        )
    }

}

export default App;