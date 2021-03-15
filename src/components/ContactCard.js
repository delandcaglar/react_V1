import react from "react"

function ContactCard(props){
    console.log("lololo")
    console.log(props)
    return(
        <div className={"contact-card"}>
            <img src={props.contact.imgUrl} width="250" height="250"/>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.phone}</p>
            <p>{props.contact.email}</p>
        </div>
    )
}


export default ContactCard