import {  getDocs,collection, addDoc } from "firebase/firestore";
import {db} from "../firebase";

function getItems() {
  return new Promise((resolve, reject) => {
    const itemCollection = collection(db,"Items");
    getDocs(itemCollection).then(snapshot=>{
      const products = snapshot.docs.map( (doc)=>({id:doc.id, ...doc.data() }));
      resolve(products)
    })
     .catch(error=>{
       console.log(error)
       reject(error)
     })
  
  });
};
/* function sendOrders(){
  const order = {
    buyer:{name:"Mauricio",phone:"1234",email:"mauricio@email.com"},
    items:[{name:"Claus y Lucas",price:1965}],
    total:1965
  }
  const ordersCollection = collection(db,"orders")
  addDoc(ordersCollection,order).then(({id})=>setOrderId(id));
}
 */
export { getItems };
