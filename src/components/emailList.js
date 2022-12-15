import email from './email'
const emailList = ({emailList}) => {
    return(
     <div>
        {emailList.map((emailItem)=>(
            <email key={emailItem.id}emailItem={emailItem}></email>
        ))}
    </div>
    );
};
export default emailList;