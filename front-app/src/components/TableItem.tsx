import RowItem from "./RowItem";

function TableItem(props:any){

    return(
        <table>

        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Prenom</th>
          </tr>
        </thead>


        <tbody>

          <tr>
            <th>1</th>
            <th>EL HAOUCH</th>
            <th>Alaaeddine</th>
          </tr>
        
         <RowItem num_key={props.persons[0].num} nom_key={props.persons[0].nom} prenom_key ={props.persons[0].prenom}/>
         <RowItem num_key={props.persons[1].num} nom_key={props.persons[1].nom} prenom_key ={props.persons[1].prenom}/>
         


        </tbody>
        </table>



    )









}
export default TableItem;