export default function Results() {
    return (
        <div className="container">                                
        <div className="row">
        <div className="col-12">
            <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title m-b-0">Таблица результатов</h5>
                </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th></th>
                                    <th scope="col"></th>
                                    <th scope="col">1 минута</th>
                                    <th scope="col">3 минуты</th>
                                    <th scope="col">10 минут</th>
                                </tr>
                            </thead>
                            <tbody className="customtable">
                                <tr>
                                    <th>
                                        <label className="customcheckbox">
                                            <input type="checkbox" className="listCheckbox"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </th>
                                    <td>Подтягивания на турнике</td>
                                    <td>10</td>
                                    <td>23</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label className="customcheckbox">
                                            <input type="checkbox" className="listCheckbox"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </th>
                                    <td>Отжимание на брусьях</td>
                                    <td>23</td>
                                    <td>38</td>
                                    <td>105</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label className="customcheckbox">
                                            <input type="checkbox" className="listCheckbox"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </th>
                                    <td>Приседания</td>
                                    <td>6</td>
                                    <td>20</td>
                                    <td>45</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label className="customcheckbox">
                                            <input type="checkbox" className="listCheckbox"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </th>
                                    <td>Мультиатлон</td>
                                    <td>39</td>
                                    <td>71</td>
                                    <td>200</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    </div>

       </div> 
    )
}