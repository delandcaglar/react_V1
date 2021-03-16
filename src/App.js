import React, {Component} from 'react'
import ReactDOM from "react-dom"
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from "./components/MainContent"
import TodoItem from "./components/TodoItem"
import './components/style.css'
import ContactCard from "./components/ContactCard"
import Joke from "./components/Joke"
import todoData from "./components/todoData"
import productsData from "./components/vschoolProducts"
import Product from "./components/Product"
import todosData from "./components/todosData"
import ApolloClient from "apollo-boost"






class App extends React.Component{
    constructor(){
        super()
        this.state = {
            answer: "Yes",
            name: "Sally",
            age: 13,
            isLoggedIn: true,
            todos: todosData
        }

    }
    render(){
        const firstName = "Deland"
        const lastName = "Caglar"
        const date = new Date(2018,6,31,15)//icini bosalttiginnda dinamik degisiyot
        const hours = date.getHours()
        let timeOfDay
        const  styles = {color: "#FF8C00",
            backgroundColor: "#FF2D00",
            fontSize: "20px"}
        if(hours < 12){
            timeOfDay = "Morning"
            styles.color = "#04756F"
        }
        else if (hours >= 12 && hours <17){
            timeOfDay = "Afternoon"
            styles.color = "#8914A3"
        } else{
            timeOfDay = "Night"
            styles.color = "#D90000"
        }
        const todoItems = this.state.todos.map(item =>  <TodoItem key ={item.id} item={item}/>)
        const jokeComponents = todoData.map(joke =>{
            return <Joke key={joke.id} question={joke.question} punchline={joke.punchline}/>
        })
        const nums = [1,2,3,4,5,6,7,8,9,10]
        const doubled = nums.map(function(num){
            return num * 2

        })
        console.log(doubled)
        const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)

        let wordDisplay
        if (this.state.isLoggedIn === true){
                wordDisplay = "in"
            }else{
                wordDisplay = "out"
            }
        return(
            <div>
                
                <img publicId="mypic" src={"https://wallpapercave.com/wp/yCXGM64.jpg"}
                     height="100" width="100" onMouseOver={()=>console.log("Hovereddd")}/>

                <br />
                <br />

                
                <button onClick={()=>console.log("I was clicked!") }>Click me</button>


                <h1>ilk data cekmek {this.state.answer}</h1>
                <h1>isim {this.state.name}</h1>
                <h1>age {this.state.age}</h1>
                <h1>you are currently {wordDisplay}</h1>


                <Header1 username={this.state.answer}/>
                <h3>{console.log('From index.js')}</h3>

                {productComponents}

                <h3>delol</h3>
                {jokeComponents}
                <Header/>

                <Joke punchline={"hahahah"}/>
                <Joke question={"canimi sikma"} punchline={"hahahah"}/>
                <Joke question={"birinci girdi"} punchline={"lololol"}/>
                <Joke question={"ikinci girdi"} punchline={"yayayayay"} />
                <Joke question={"ucuncu girdi"} punchline={"puhahah"}/>
                <Joke question={"dorduncu girdi"} punchline={"akjsan "}/>
                <ContactCard
                    contact ={{name:"Mr. Bibi",
                    imgUrl:"https://cf.ltkcdn.net/cats/images/orig/214168-1732x1732-bootskitten.jpg",
                    phone: "(212) 555-1234",
                    email: "mr.bibi@catnap.meow"}}

                />
                <ContactCard
                    contact ={{name:"Ms. Mimi",
                    imgUrl:"https://www.tiredearth.com/sites/default/files/styles/resolution_720_auto/public/Upload/2018Tyson%20LizotteAuthor/aa.jpg?itok=VmU5bPzw",
                    phone: "(212) 555-1235",
                    email: "ms.mimi@catnap.meow"}}
                />
                <div className="todo-list">

                    {todoItems}

                    {/*<TodoItem/>*/}
                    {/*<TodoItem/>*/}
                    {/*<TodoItem/>*/}
                    {/*<TodoItem/>*/}
                </div>
                <h1>Hello, {`${firstName} ${lastName}`}!!</h1>
                <h1 style={styles}> {`${timeOfDay}`}!!</h1>

                <MainContent/>
                <Footer />
                <Header1 username={"delllololo"}/>
                <Greeting/>
            </div>
        )

    }

}



class Header1 extends React.Component{
    render(){
       return(
           <header>
               <p>Welcome, {this.props.username}!</p>
           </header>)
    }
}

class Greeting extends Component{
    render(){
        const date = new Date()
        const hours =  date.getHours()
        let timeOfDay
        if (hours< 12){
            timeOfDay = "morning"
        }else if (hours>= 12 && hours <17){
            timeOfDay="afternoon"
        }else  {
            timeOfDay="night"
        }
        return(<h1>Good {timeOfDay} to you, sir Delo!</h1>)

    }
}

ReactDOM.render(<App />, document.getElementById("root"))




export default App