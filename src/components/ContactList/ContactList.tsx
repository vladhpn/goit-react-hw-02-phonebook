import PropTypes from 'prop-types';
import styles from './styles.module.scss'
import { IContacts } from '../../interfaces';


type ContactListType = {
    contacts: IContacts[]
    onDeleteContact(id:string):void
}

const ContactList: React.FC<ContactListType> = ({contacts, onDeleteContact }) =>{return (<>
    <ul className={styles.list} >{contacts.map(({id, name, number}) => <li key={id} className={styles.item}>
        <p>{name}:</p>
        <p>{number}</p>
        <button className={styles.button} onClick={()=> onDeleteContact(id)}>Delete</button>
        </li>)}
        </ul> </>);
    } 

    ContactList.propTypes = {
     onDeleteContact: PropTypes.func.isRequired
    }
export default ContactList;
