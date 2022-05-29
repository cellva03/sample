import React from 'react';
import { response } from '../response';
import { useState,useEffect } from 'react';
import {useHistory,useLocation} from 'react-router-dom'
// const index = 0;
console.log(response);
let lists = response.list
if(window.location.pathname==='/rank'){

	const rankList = ()=>{
		let ranks=lists.sort((a,b)=>{
		return a.rank - b.rank;
		})
		lists=ranks
		}
	rankList();
}
else if(window.location.pathname === '/name'){
	const nameList = ()=>{
		let names=lists.sort((a,b)=>{
		return a.name.localeCompare(b.name);
		})
		lists=names
		}
	nameList();
}
else if(window.location.pathname === '/age'){
	const ageList = ()=>{
		let ages=lists.sort((a,b)=>{
		return a.age - b.age;
		})
		lists=ages
		}
	ageList();
}
else{
	const pointList = ()=>{
		let points=lists.sort((a,b)=>{
		return a.points - b.points;
		})
		lists=points
		}
	pointList();
}

function LeaderBoard(props) {
	const [lists,setLists] = useState(response.list)
	// const [promise,setPromise] = useState({})
	let history = useHistory();
	const location = useLocation(); 

	const handleClickRank =()=>{
		history.push('/rank')
		const rankList = ()=>{
			let ranks=lists.sort((a,b)=>{
			return a.rank - b.rank;
			})
			setLists(ranks)
			}
		rankList();
	}
	const handleClickName =()=>{
		history.push('/name')
		const nameList = ()=>{
			let names=lists.sort((a,b)=>{
			return a.name.localeCompare(b.name);
			})
			setLists(names)
			}
		nameList();
	}
	const handleClickPoint =()=>{
		history.push('/points')
		const pointList = ()=>{
			let points=lists.sort((a,b)=>{
			return a.points - b.points;
			})
			setLists(points)
			}
		pointList();
	}
	const handleClickAge =()=>{
		history.push('/age')
		const ageList = ()=>{
			let ages=lists.sort((a,b)=>{
			return a.age - b.age;
			})
			setLists(ages)
			}
		ageList();
	}
	useEffect(()=>{
		// getData().then(data =>setPromise(data))
		if(window.location.pathname === '/'){
			setLists(lists)
		}
	},[location,lists]);
	// console.log(promise);
	return (
		<div className="text-center mt-50">
			<div> 
				<div>
					<button data-testid="route-rank" className='outlined' type="button" onClick={handleClickRank}>Rank</button>
					<button data-testid="route-name" className='outlined' type="button"onClick={handleClickName}>Name</button>
					<button data-testid="route-points" className='outlined' type="button"onClick={handleClickPoint}>Points</button>
					<button data-testid="route-age" className='outlined' type="button"onClick={handleClickAge}>Age</button>
				</div>
			</div>
			<div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
				<table className="mt-50" data-testid="app-table">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th className="numeric">Points</th>
							<th className="numeric">Age</th>
						</tr>
					</thead>
					<tbody data-testid="app-tbody">
					{lists.map((ele,index)=>{
						return(
							<tr key={ele.rank}>
								<td data-testid={`rank-${index}`}>{ele.rank}</td>
								<td data-testid={`name-${index}`}>{ele.name}</td>
								<td data-testid={`points-${index}`} className="numeric">{ele.points}</td>
								<td data-testid={`age-${index}`} className="numeric">{ele.age}</td>
							</tr>
						)
					})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default LeaderBoard;
