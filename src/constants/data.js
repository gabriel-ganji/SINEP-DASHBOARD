import images from "./images"

const data = {
    user: {
        name: 'Mercearia Nova Esperança',
        img: images.cesta
    },
    summary: [
        {
            title: 'Total Vendido Hoje',
            value: '$120,00',
            percent: 79
        },
       
   
        {
            title: 'Produtos Vencidos',
            value: '3',
            percent: 25
        }
    ],
    revenueSummary: {
        title: 'Produto Mais Vendidos',
        value: 'Arroz do Amaro',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [50, 100, 100, 120, 150, 200, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 100, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data