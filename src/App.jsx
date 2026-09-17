import { useMemo, useState } from 'react'
import './App.css'

const initialSalaries = [
  { id: 1, company: 'LG디스플레이', role: '생산직', years: 3, month: '2026-08', gross: 4300000, net: 3660000, hours: 214 },
  { id: 2, company: '현대자동차', role: '생산직', years: 2, month: '2026-08', gross: 4680000, net: 3910000, hours: 226 },
  { id: 3, company: 'SK하이닉스', role: '오퍼레이터', years: 1, month: '2026-08', gross: 3860000, net: 3290000, hours: 198 },
  { id: 4, company: '삼성SDI', role: '설비보전', years: 5, month: '2026-08', gross: 5120000, net: 4210000, hours: 232 },
  { id: 5, company: '포스코', role: '교대 생산직', years: 4, month: '2026-08', gross: 4750000, net: 3970000, hours: 220 },
  { id: 6, company: '한화오션', role: '용접', years: 2, month: '2026-08', gross: 4420000, net: 3740000, hours: 238 },
]
const emptyForm = { company: '', role: '', years: '', month: '', gross: '', net: '', hours: '' }
const won = (value) => `${Math.round(value).toLocaleString('ko-KR')}원`

function SalaryCard({ salary }) {
  return <article className="salary-card">
    <div className="card-head"><div><h3>{salary.company}</h3><p>{salary.role} · 근속 {salary.years}년</p></div><span className="month-badge">{salary.month.replace('-', '.')} 급여</span></div>
    <div className="salary-highlight"><span>실수령액</span><strong>{won(salary.net)}</strong></div>
    <dl className="salary-details">
      <div><dt>총급여</dt><dd>{won(salary.gross)}</dd></div>
      <div><dt>총 근무시간</dt><dd>{salary.hours.toLocaleString('ko-KR')}시간</dd></div>
      <div className="hourly"><dt>진짜 시급</dt><dd>{won(salary.gross / salary.hours)}</dd></div>
    </dl>
  </article>
}

function Home({ salaries, onRegister }) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase('ko-KR')
    return keyword ? salaries.filter(({ company, role }) => `${company} ${role}`.toLocaleLowerCase('ko-KR').includes(keyword)) : salaries
  }, [query, salaries])

  return <main className="page home-page">
    <header className="brand">월급</header>
    <section className="hero-copy"><p className="eyebrow">직장인 월급 비교</p><h1>다른 회사 사람들은<br />이번 달 얼마나 받았을까?</h1><p className="intro">급여와 근무시간을 함께 보고, 내가 받는 월급을 제대로 비교해 보세요.</p></section>
    <div className="search-wrap"><span className="search-icon" aria-hidden="true" /><input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="회사 또는 직무 검색" aria-label="회사 또는 직무 검색" /></div>
    <button className="primary-button register-cta" type="button" onClick={onRegister}><span>내 월급 등록하기</span><span aria-hidden="true">＋</span></button>
    <div className="list-heading"><h2>{query ? '검색 결과' : '최근 등록된 월급'}</h2><span>{filtered.length}건</span></div>
    <section className="salary-list" aria-live="polite">{filtered.length ? filtered.map((salary) => <SalaryCard key={salary.id} salary={salary} />) : <div className="empty-result"><strong>검색 결과가 없어요</strong><p>다른 회사명이나 직무로 검색해 보세요.</p></div>}</section>
    <p className="data-note">표시된 내용은 MVP 테스트용 가상 데이터입니다.</p>
  </main>
}

function Register({ onBack, onSubmit }) {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const hourly = Number(form.gross) > 0 && Number(form.hours) > 0 ? Number(form.gross) / Number(form.hours) : 0
  const update = ({ target: { name, value } }) => { setForm((current) => ({ ...current, [name]: value })); if (errors[name]) setErrors((current) => ({ ...current, [name]: '' })) }
  const submit = (event) => {
    event.preventDefault()
    const next = {}
    if (!form.company.trim()) next.company = '회사명을 입력해 주세요.'
    if (!form.role.trim()) next.role = '직무를 입력해 주세요.'
    if (form.years === '' || Number(form.years) < 0) next.years = '근속연수를 입력해 주세요.'
    if (!form.month) next.month = '급여월을 선택해 주세요.'
    if (!form.gross || Number(form.gross) <= 0) next.gross = '총급여를 입력해 주세요.'
    if (!form.net || Number(form.net) <= 0) next.net = '실수령액을 입력해 주세요.'
    if (!form.hours || Number(form.hours) <= 0) next.hours = '근무시간을 입력해 주세요.'
    if (Object.keys(next).length) return setErrors(next)
    onSubmit({ id: Date.now(), company: form.company.trim(), role: form.role.trim(), years: Number(form.years), month: form.month, gross: Number(form.gross), net: Number(form.net), hours: Number(form.hours) })
  }
  const field = (name, label, type = 'text', placeholder = '') => <label className={`form-field ${errors[name] ? 'has-error' : ''}`}><span>{label}</span><input name={name} type={type} value={form[name]} onChange={update} placeholder={placeholder} min={type === 'number' ? '0' : undefined} step={name === 'years' ? '1' : undefined} inputMode={type === 'number' ? 'numeric' : undefined} />{errors[name] && <small>{errors[name]}</small>}</label>

  return <main className="page register-page">
    <header className="sub-header"><button className="back-button" type="button" onClick={onBack} aria-label="홈으로 돌아가기">←</button><strong>월급 등록</strong><span /></header>
    <section className="form-intro"><p className="eyebrow">나의 월급 기록</p><h1>이번 달 월급을<br />알려주세요</h1><p>입력한 내용은 지금 이 화면에서만 사용됩니다.</p></section>
    <form onSubmit={submit} noValidate>
      <div className="form-card">{field('company', '회사명', 'text', '예: LG디스플레이')}{field('role', '직무', 'text', '예: 생산직')}<div className="field-row">{field('years', '근속연수', 'number', '예: 3')}{field('month', '급여월', 'month')}</div></div>
      <div className="form-card">{field('gross', '총급여', 'number', '세전 금액')}{field('net', '실수령액', 'number', '통장에 들어온 금액')}{field('hours', '총 근무시간', 'number', '예: 214')}</div>
      <div className={`hourly-preview ${hourly ? 'calculated' : ''}`}><div><span>자동 계산된 진짜 시급</span><small>총급여 ÷ 총 근무시간</small></div><strong>{hourly ? won(hourly) : '— 원'}</strong></div>
      <button className="primary-button submit-button" type="submit">등록하기</button>
    </form>
  </main>
}

function App() {
  const [screen, setScreen] = useState('home')
  const [salaries, setSalaries] = useState(initialSalaries)
  const go = (next) => { setScreen(next); window.scrollTo({ top: 0 }) }
  const addSalary = (salary) => { setSalaries((current) => [salary, ...current]); go('home') }
  return screen === 'home' ? <Home salaries={salaries} onRegister={() => go('register')} /> : <Register onBack={() => go('home')} onSubmit={addSalary} />
}
export default App
