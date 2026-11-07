import {useEffect,useMemo,useState} from 'react'
import {starterData} from '../data/categories'
import {monthExpenses,sum} from '../utils/finance'
const KEY='pennywise-react-data'
export function useFinance(){
 const [data,setData]=useState(()=>{try{return JSON.parse(localStorage.getItem(KEY))||starterData}catch{return starterData}})
 useEffect(()=>localStorage.setItem(KEY,JSON.stringify(data)),[data])
 const monthly=useMemo(()=>monthExpenses(data.expenses),[data.expenses])
 const spent=useMemo(()=>sum(monthly),[monthly])
 const saved=data.goals.reduce((s,g)=>s+Number(g.saved||0),0)
 const setBudget=n=>setData(d=>({...d,budget:Number(n)}))
 const addExpense=e=>setData(d=>({...d,expenses:[{...e,id:crypto.randomUUID()},...d.expenses]}))
 const updateExpense=e=>setData(d=>({...d,expenses:d.expenses.map(x=>x.id===e.id?e:x)}))
 const deleteExpense=id=>setData(d=>({...d,expenses:d.expenses.filter(x=>x.id!==id)}))
 const addGoal=g=>setData(d=>({...d,goals:[...d.goals,{...g,id:crypto.randomUUID(),saved:0}]}))
 const updateGoal=g=>setData(d=>({...d,goals:d.goals.map(x=>x.id===g.id?g:x)}))
 const deleteGoal=id=>setData(d=>({...d,goals:d.goals.filter(x=>x.id!==id)}))
 return {data,monthly,spent,balance:data.budget-spent,saved,setBudget,addExpense,updateExpense,deleteExpense,addGoal,updateGoal,deleteGoal}
}
