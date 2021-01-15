import Layout from '../components/Layout'

import MaterialTable from 'material-table'

const Home = () => {
  const [columns] = React.useState([
    {
      title: 'Nome',
      field: 'name',
      validate: rowData =>
        rowData?.name === '' ? 'Nome não pode ser vazio' : ''
    },
    {
      title: 'Sobrenome',
      field: 'lastname',
      validate: rowData =>
        rowData?.lastname?.length < 2
          ? 'Sobrenome deve ter pelo menos 3 caracteres'
          : ''
    },
    {
      title: 'Idade',
      field: 'age'
    },
    {
      title: 'Sexo',
      field: 'gender',
      lookup: { 0: 'Masculino', 1: 'Feminino', 2: 'Não declarado' }
    },
    {
      title: 'Cor dos Olhos',
      field: 'eyeColor',
      lookup: {
        0: 'Castanho Escuro',
        1: 'Castanho Claro',
        2: 'Verde',
        3: 'Azul',
        4: 'Outro'
      }
    }
  ])

  const [data, setData] = React.useState([
    { name: 'Luiz', lastname: 'Henrique', age: 29, gender: 0, eyeColor: 1 },
    { name: 'Aline', lastname: 'Lacerda', age: 27, gender: 1, eyeColor: 2 },
    { name: 'Sara', lastname: 'Fernandes', age: 23, gender: 2, eyeColor: 4 },
    { name: 'Rodrigo', lastname: 'Palhares', age: 39, gender: 0, eyeColor: 2 },
    { name: 'Fernando', lastname: 'Silva', age: 51, gender: 2, eyeColor: 3 }
  ])

  return (
    <Layout title="Home - Nextale Test">
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          title="Pessoas"
          columns={columns}
          data={data}
          options={{
            actionsColumnIndex: -1
          }}
          localization={{
            pagination: {
              labelDisplayedRows: '{from}-{to} de {count}',
              labelRowsSelect: 'linhas',
              nextTooltip: 'Próxima página',
              lastTooltip: 'Última página',
              previousTooltip: 'Página anterior',
              firstTooltip: 'Primeira página'
            },
            header: {
              actions: 'Ações'
            },
            body: {
              addTooltip: 'Adicionar',
              emptyDataSourceMessage: 'Nenhuma pessoa encontrada',
              editTooltip: 'Editar',
              deleteTooltip: 'Deletar',
              filterRow: {
                filterTooltip: 'Filter'
              },
              editRow: {
                deleteText: 'Tem certeza que deseja deletar?',
                cancelTooltip: 'Cancelar',
                saveTooltip: 'Salvar'
              }
            },
            toolbar: {
              searchTooltip: 'Pesquisar',
              searchPlaceholder: 'Pesquisar'
            }
          }}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  setData([...data, newData])

                  resolve()
                }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  const dataUpdate = [...data]
                  const index = oldData.tableData.id
                  dataUpdate[index] = newData
                  setData([...dataUpdate])

                  resolve()
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
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
