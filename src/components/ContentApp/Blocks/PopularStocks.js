import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios'

const TOKEN = 'ccl2uk2ad3i7ei0c9m5gccl2uk2ad3i7ei0c9m60';
const BASE_URL = 'https://finnhub.io/api/v1/quote';


const PopularStocks = () => {

    const [ selectedProducts8, setSelectedProducts8 ] = useState(null);
    const [ stockData, setStockData ] = useState([])

    const getStocksData = (stock) => {
        return axios
          .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      }
      useEffect(() => {
        //const intervalId = setInterval(() => {  
          let tempStockData =[];
          //const stocksList = ["AMZN", "PYPL", "ADBE", "AAPL", "BABA", "SHOP", "TSLA", "NVDA", "MSFT", "COIN", "SBUX", "INTC", "ABNB", "TWTR", "NKLA", "ADDYY"];
          const stocksList = ["AMZN", "PYPL"];
          let promises = [];
         
          stocksList.map((stock) => {
            promises.push(
              getStocksData(stock)
              .then((res) => {
                tempStockData.push({
                  name: stock,
                  ...res.data
                });
              })
            )
          });
          Promise.all(promises).then(()=>{
              setStockData(tempStockData);
          })
       // },30000)
       // return () => clearInterval(intervalId);
      },[]);
    
      const formatCurrency = (stockData) => {
        return stockData.toLocaleString('pt-PT', {style: 'currency', currency: 'EUR'});
      }
      const priceBodyTemplate = (rowData) => {
          return formatCurrency(rowData.c);
      }

  return (
    <div>
        <div className="dataTable__stocks">
                <DataTable 
                  value={stockData} 
                  rowClassName="table__row"
                  responsiveLayout='scroll'
                  className="table__stocks" 
                  selectionMode="checkbox"   
                  selection={selectedProducts8}
                  onSelectionChange={e => setSelectedProducts8(e.value)} 

                  // Colocar Coluna com imagem do gráfico
                  // Colocar Tabela centrada/ com 100% de with 
                  // Colocar Icon do Stock em coluna antes do nome
                  // Colocar coluna da percentagem e ir buscar a devida com caso seja negativa ou positiva -> Código na linha de baixo (não funciona)
                        //<Column field={Number(stockData.percentage).toFixed(2) + "%"}"percentage{" header="Percentage" sortable></Column>
                  
                >
                  <Column className="col__row row__name" field="name"  header="Stock" sortable></Column>
                  <Column className="col__row row__price" field="c" header="Price" sortable body={priceBodyTemplate}></Column>
                  
                  <Column className="col__row row__oprice" field="o" header="Open Price" body={priceBodyTemplate}></Column>
                  <Column className="col__row row__cprice" field="pc" header="Closed Price" body={priceBodyTemplate}></Column>
                  <Column className="col__row row__hprice" field="h" header="Higher Price" body={priceBodyTemplate}></Column>
                  <Column className="col__row row__lprice" field="l" header="Lower Price" body={priceBodyTemplate}></Column>
                  <Column selectionMode="multiple" style={{ padding: '15px 30px', }}></Column>

                </DataTable>
        </div>
    </div>
  )
}

export default PopularStocks