import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class App extends React.Component {

    constructor() {
        super()
        this.state = { data: [] }
      }

    componentDidMount() {
        fetch('https://alexgr.ro/ehealth/patients.json')
            .then(response => response.json())
            .then(data => {
              this.setState({ data: data })
         })
     }
    render() {
        const data = this.state.data;
        const columns = [
            {
                Header: 'Nr.',
                accessor: 'id',
                width: 40

            },
            {
                Header: 'Nume',
                accessor: 'last_name',
                width: 200
            },
            {
                Header: 'Prenume',
                accessor: 'first_name',
                width: 200
            },
            {
                Header: 'Email',
                accessor: 'email',
                width: 400
            }
        ];
        return (
                <ReactTable
                    className="-striped -highlight"
                    data={data}
                    columns={columns}
                    //pageSizeOptions={[15, 30]}
                    showPageSizeOptions = {false}
                    showPagination={false}
                    style={{
                        height: '100vh',
                        width: 900,
                        textAlign: "center"
                    }}
                    SubComponent={row => {
                        return (
                            <div style={{ padding: '20px', textAlign: "left"}}>
                              <b>Gender</b>: {data[row.index].gender}<br/>
                              <b>Diagnosis Code</b>: {data[row.index].diagnosis_code}<br/>
                              <b>Diagnosis Description</b>: {data[row.index].diagnosis_description}<br/>
                              <b>Diagnosis Description Detailed</b>: {data[row.index].diagnosis_description_detailed}<br/>
                              <b>Administered Drug Treatment</b>: {data[row.index].administered_drug_treatment}
                            </div>

                        );
                    }}
                />
        );
    }
}
export default App;
