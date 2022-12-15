import password from './password'
const passwordList = ({passwordList}) => {
    return(
     <div>
        {passwordList.map((passwordItem)=>(
            <password key={passwordItem.id}passwordItem={passwordItem}></password>
        ))}
    </div>
    );
};
export default passwordList;