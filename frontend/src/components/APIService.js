export default class APIService {
    static UpdateArticle(id, body) {
        return fetch(`http://localhost:10666/update/${id}/`, {
            'method':'PUT',
            headers: {
              'Content-Type':'application/json'
      
            },
            body: JSON.stringify(body)
          })
          .then(resp => resp.json())
    }

    static InsertArticle(body) {
        return fetch(`http://localhost:10666/add`, {
            'method':'POST',
            headers: {
              'Content-Type':'application/json'
      
            },
            body: JSON.stringify(body)
          })
          .then(resp => resp.json())
    }


    static DeleteArticle(id) {
        return fetch(`http://localhost:10666/delete/${id}/`, {
            'method':'Delete',
            headers: {
              'Content-Type':'application/json'
      
            },
            
          })
          
    }



}


