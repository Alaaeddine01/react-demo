function RowItem(props:any){

    return(
      <tr>
        <th>{props.num_key}</th>
        <th>{props.nom_key}</th>
        <th>{props.prenom_key}</th>
      </tr>
    )




}

export default RowItem;