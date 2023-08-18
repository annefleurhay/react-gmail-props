import Email from "./email"


function Emails(props) {
    return ( <ul>
        {props.list.map((email, index) => (
          <Email email={email} index={index} setEmails={props.setEmails}/>
        ))}
      </ul>
      )
}

export default Emails