const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'WebSite',
        amount: 50000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: 20000,
        date: '23/01/2021'
    },
]

const Transaction = {
    incomes() {

    },
    expenses() {

    },
    total() {

    }
}

const DOM = {
    innerHTMLTransaction() {
        const html = `
            <tr>
                <td class="description">Luz</td>
                <td class="expense">-500,00</td>
                <td class="date">32/01/2021</td>
                <td>
                    <img src="./assets/minus.svg" alt="Remover Transação">
                </td>
            </tr>
        `
    }

}