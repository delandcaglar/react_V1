import React from 'react'
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
import ApolloClient from "apollo-boost"
import todosData from "./components/todosData"





function App(){
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


    const jokeComponents = todoData.map(joke =>{
        return <Joke key={joke.id} question={joke.question} punchline={joke.punchline}/>
    })

    const nums = [1,2,3,4,5,6,7,8,9,10]
    const doubled = nums.map(function(num){
        return num * 2

    })
    console.log(doubled)

    const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)


    return(
        <div>
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
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
            <h1>Hello, {`${firstName} ${lastName}`}!!</h1>
            <h1 style={styles}> {`${timeOfDay}`}!!</h1>

            <MainContent/>
            <Footer />
        </div>
    )
}

export default App