import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function ResultsPage() {
    return (
        <div className="container">
			<div className="resultsPage">
			  <nav aria-label="breadcrumb" class="main-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Главная</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Результаты выступлений спортсменов</li>
                </ol>
              </nav>
			<div className="row">
				<aside className="col-md-3">
					<div className="card">
						<article className="filter-group">
							<header className="card-header">
								<a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" className="">
									<i className="icon-control fa fa-chevron-down"></i>
									<h6 className="title">Поиск результатов</h6>
								</a>
							</header>
							<div className="filter-content collapse show" id="collapse_1">
							
								<div className="card-body">
									<form className="pb-3 form--find">
									<div className="input-group">
									<input type="text" className="form-control" placeholder="Команда (участник)" />
									<div className="input-group-append">
										<button className="btn btn-light" type="button"><i className="fa fa-search"><span>Найти</span></i></button>
									</div>
									</div>
									</form>
									
									<ul className="list-menu">
									<li><a href="#">По команде </a></li>
									<li><a href="#">По спортсмену</a></li>
									{/* <li><a href="#">Cinema  </a></li>
									<li><a href="#">Clothes  </a></li>
									<li><a href="#">Home items </a></li>
									<li><a href="#">Animals</a></li>
									<li><a href="#">People </a></li> */}
									</ul>

								</div> 
							</div>
						</article> 
						<article className="filter-group">
							<header className="card-header">
								<a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" className="">
									<i className="icon-control fa fa-chevron-down"></i>
									<h6 className="title"></h6>
								</a>
							</header>
							<div className="filter-content collapse show" id="collapse_2">
								<div className="card-body">
									<label className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" />
									<div className="custom-control-label">Команда 1
										<b className="badge badge-pill badge-light float-right">120</b>  </div>
									</label>
									<label className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" />
									<div className="custom-control-label">Команда 2
										<b className="badge badge-pill badge-light float-right">100</b>  </div>
									</label>
									<label className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" />
									<div className="custom-control-label">Команда 3
										<b className="badge badge-pill badge-light float-right">80</b>  </div>
									</label>
									<label className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" />
									<div className="custom-control-label">Команда 4
										<b className="badge badge-pill badge-light float-right">60</b>  </div>
									</label>
									<label className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" />
									<div className="custom-control-label">Команда 5
										<b className="badge badge-pill badge-light float-right">40</b>  </div>
									</label>
									<label className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" />
									<div className="custom-control-label">Команда 6
										<b className="badge badge-pill badge-light float-right">20</b>  </div>
									</label>
						</div> 
							</div>
						</article>
						{/* <article className="filter-group">
							<header className="card-header">
								<a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" className="">
									<i className="icon-control fa fa-chevron-down"></i>
									<h6 className="title">Price range </h6>
								</a>
							</header>
							<div className="filter-content collapse show" id="collapse_3">
								<div className="card-body">
									<input type="range" className="custom-range" min="0" max="100" name="" />
									<div className="form-row">
									<div className="form-group col-md-6">
									<label>Min</label>
									<input className="form-control" placeholder="$0" type="number" />
									</div>
									<div className="form-group text-right col-md-6">
									<label>Max</label>
									<input className="form-control" placeholder="$1,0000" type="number" />
									</div>
									</div> 
									<button className="btn btn-block btn-primary">Apply</button>
								</div>
							</div>
						</article> */}
						{/* <article className="filter-group">
							<header className="card-header">
								<a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" className="">
									<i className="icon-control fa fa-chevron-down"></i>
									<h6 className="title">Sizes </h6>
								</a>
							</header>
							<div className="filter-content collapse show" id="collapse_4">
								<div className="card-body">
								<label className="checkbox-btn">
									<input type="checkbox" />
									<span className="btn btn-light"> XS </span>
								</label>

								<label className="checkbox-btn">
									<input type="checkbox" />
									<span className="btn btn-light"> SM </span>
								</label>

								<label className="checkbox-btn">
									<input type="checkbox" />
									<span className="btn btn-light"> LG </span>
								</label>

								<label className="checkbox-btn">
									<input type="checkbox" />
									<span className="btn btn-light"> XXL </span>
								</label>
							</div>
							</div>
						</article> */}
						<article className="filter-group">
							<header className="card-header">
								<a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" className="">
									<i className="icon-control fa fa-chevron-down"></i>
									<h6 className="title">Другие параметры </h6>
								</a>
							</header>
							<div className="filter-content collapse in" id="collapse_5">
								<div className="card-body">

									<label className="custom-control custom-radio">
									<input type="radio" name="myfilter_radio" className="custom-control-input" />
									<div className="custom-control-label">Подтягивания на турнике </div>
									</label>

									<label className="custom-control custom-radio">
									<input type="radio" name="myfilter_radio" className="custom-control-input" />
									<div className="custom-control-label">Отжимания на брусьях </div>
									</label>

									<label className="custom-control custom-radio">
									<input type="radio" name="myfilter_radio" className="custom-control-input" />
									<div className="custom-control-label">Приседания</div>
									</label>

									<label className="custom-control custom-radio">
									<input type="radio" name="myfilter_radio" className="custom-control-input" />
									<div className="custom-control-label">Мультиатлон</div>
									</label>
								</div>
							</div>
						</article>
					</div>

	</aside>
	<main className="col-md-9">

<header className="border-bottom mb-4 pb-3">
		<div className="form-inline">
			<span className="mr-md-auto">6 команд найдено </span>
			<select className="mr-2 form-control">
				<option>Последние найденные</option>
				<option>Высокий рейтинг</option>
				<option>Активное участие</option>
			</select>
			<div className="btn-group">
				<a href="#" className="btn btn-outline-secondary" data-toggle="tooltip" title="" data-original-title="List view"> 
					<i className="fa fa-bars"></i></a>
				<a href="#" className="btn  btn-outline-secondary active" data-toggle="tooltip" title="" data-original-title="Grid view"> 
					<i className="fa fa-th"></i></a>
			</div>
		</div>
</header>

<div className="row">

	<div className="col-md-4">
		<figure className="card card-product-grid">
			<div className="img-wrap"> 
				{/* <span className="badge badge-danger">Лидер </span> */}
					<img src="https://avatars.mds.yandex.net/i?id=a9a5f6acfd06f3242323e7db292086be1f9384cf-3770350-images-thumbs&n=13" className="img-fluid" />
				{/* <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i></a> */}
			</div>
			<figcaption className="info-wrap">
				<div className="fix-height">
					<a href="#" className="title">Команда 1</a>
					<div className="price-wrap mt-2">
						<span className="price">Рейтинг: 120</span>
						<del className="price-old"></del>
					</div>
				</div>
				<a href="#" className="btn btn-block btn-primary">
					<Link to="/perfomancesPage" className='resultsPage-link'>Результаты</Link>					
				</a>
			</figcaption>
		</figure>
	</div>

	<div className="col-md-4">
		<figure className="card card-product-grid">
			<div className="img-wrap"> 
				{/* <span className="badge badge-danger"> NEW </span> */}
								<img src="https://avatars.mds.yandex.net/i?id=214d3218776b56efd529dd42c7fce34aec03460d-9067511-images-thumbs&n=13" className="img-fluid" />
				{/* <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i></a> */}
			</div>
			<figcaption className="info-wrap">
				<div className="fix-height">
					<a href="#" className="title">Команда 2</a>
					<div className="price-wrap mt-2">
						<span className="price">Рейтинг: 100</span>
						<del className="price-old"></del>
					</div>
				</div>
				<a href="#" className="btn btn-block btn-primary">
					<Link to="/perfomancesPage" className='resultsPage-link'>Результаты</Link>					
				</a>
			</figcaption>
		</figure>
	</div>

	<div className="col-md-4">
		<figure className="card card-product-grid">
			<div className="img-wrap"> 
				{/* <span className="badge badge-danger">Лидер </span> */}
					<img src="https://avatars.mds.yandex.net/i?id=a9a5f6acfd06f3242323e7db292086be1f9384cf-3770350-images-thumbs&n=13" className="img-fluid" />
				{/* <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i></a> */}
			</div>
			<figcaption className="info-wrap">
				<div className="fix-height">
					<a href="#" className="title">Команда 3</a>
					<div className="price-wrap mt-2">
						<span className="price">Рейтинг: 80</span>
						<del className="price-old"></del>
					</div>
				</div>
				<a href="#" className="btn btn-block btn-primary">
					<Link to="/perfomancesPage" className='resultsPage-link'>Результаты</Link>					
				</a>
			</figcaption>
		</figure>
	</div>

	<div className="col-md-4">
		<figure className="card card-product-grid">
			<div className="img-wrap"> 
				{/* <span className="badge badge-danger"> NEW </span> */}
								<img src="https://avatars.mds.yandex.net/i?id=214d3218776b56efd529dd42c7fce34aec03460d-9067511-images-thumbs&n=13" className="img-fluid" />
				{/* <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i></a> */}
			</div>
			<figcaption className="info-wrap">
				<div className="fix-height">
					<a href="#" className="title">Команда 4</a>
					<div className="price-wrap mt-2">
						<span className="price">Рейтинг: 60</span>
						<del className="price-old"></del>
					</div>
				</div>
				<a href="#" className="btn btn-block btn-primary">
					<Link to="/perfomancesPage" className='resultsPage-link'>Результаты</Link>					
				</a>
			</figcaption>
		</figure>
	</div>

	<div className="col-md-4">
		<figure className="card card-product-grid">
			<div className="img-wrap"> 
				{/* <span className="badge badge-danger">Лидер </span> */}
					<img src="https://avatars.mds.yandex.net/i?id=a9a5f6acfd06f3242323e7db292086be1f9384cf-3770350-images-thumbs&n=13" className="img-fluid" />
				{/* <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i></a> */}
			</div>
			<figcaption className="info-wrap">
				<div className="fix-height">
					<a href="#" className="title">Команда 5</a>
					<div className="price-wrap mt-2">
						<span className="price">Рейтинг: 40</span>
						<del className="price-old"></del>
					</div>
				</div>
				<a href="#" className="btn btn-block btn-primary">
					<Link to="/perfomancesPage" className='resultsPage-link'>Результаты</Link>					
				</a>
			</figcaption>
		</figure>
	</div>

	<div className="col-md-4">
		<figure className="card card-product-grid">
			<div className="img-wrap"> 
				{/* <span className="badge badge-danger"> NEW </span> */}
								<img src="https://avatars.mds.yandex.net/i?id=214d3218776b56efd529dd42c7fce34aec03460d-9067511-images-thumbs&n=13" className="img-fluid" />
				{/* <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i></a> */}
			</div>
			<figcaption className="info-wrap">
				<div className="fix-height">
					<a href="#" className="title">Команда 6</a>
					<div className="price-wrap mt-2">
						<span className="price">Рейтинг: 20</span>
						<del className="price-old"></del>
					</div>
				</div>
				<a href="#" className="btn btn-block btn-primary">
					<Link to="/perfomancesPage" className='resultsPage-link'>Результаты</Link>					
				</a>
			</figcaption>
		</figure>
	</div>
</div>


<nav className="mt-4" aria-label="Page navigation sample">
  <ul className="pagination">
    <li className="page-item disabled"><a className="page-link" href="#">Предыдущая</a></li>
    <li className="page-item active"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Следующая</a></li>
  </ul>
</nav>

	</main>
	</div>
			</div>	
		</div>
    )
}