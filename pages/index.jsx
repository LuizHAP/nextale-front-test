import Layout from '../components/Layout'

import MaterialTable from 'material-table'

const Home = () => {
  const [columns, setColumns] = React.useState([
    { title: 'Nome', field: 'name' },
    {
      title: 'Sobrenome',
      field: 'lastname'
    },
    {
      title: 'Sexo',
      field: 'gender',
      lookup: { 0: 'Masculino', 1: 'Feminino', 2: 'Não declarado' }
    }
  ])

  const [data, setData] = React.useState([
    { name: 'Mehmet', lastname: 'Baran', gender: 2 },
    { name: 'Zerya Betül', lastname: 'Baran', gender: 0 }
  ])

  return (
    <Layout title="Home - Nextale Test">
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          title="Person Table"
          columns={columns}
          data={data}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData])

                  resolve()
                }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data]
                  const index = oldData.tableData.id
                  dataUpdate[index] = newData
                  setData([...dataUpdate])

                  resolve()
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data]
                  const index = oldData.tableData.id
                  dataDelete.splice(index, 1)
                  setData([...dataDelete])

                  resolve()
                }, 1000)
              })
          }}
        />
      </div>
    </Layout>
  )
}

export default Home
