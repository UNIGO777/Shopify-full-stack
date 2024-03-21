// product fatch
import axios from "axios";

const fatchProduct = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/all/products")
            console.log(response.data,"product")
            return  response.data;
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    
}
// ---------------------------------------------------------------code--------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------

// const [data, setData] = useState([])
  
  
//     useEffect(() => {
//       async function fatchdata(){
//       let data = fatchProduct();
//         setData(await data)
//       }
//       fatchdata()
//   },[])

export default fatchProduct;
