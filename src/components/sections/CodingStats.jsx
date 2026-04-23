import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

// ─── 🔧 SET YOUR USERNAMES HERE ──────────────────────────────────────────────
const LC_USERNAME  = 'Priyanshu_0922'
const GFG_USERNAME = 'paulpriya02ty'

// ─── APIs (public, CORS-enabled, no backend needed) ──────────────────────────
// LeetCode  → https://github.com/alfaarghya/alfa-leetcode-api
// GFG       → https://github.com/kartikey-codes/geeks-for-geeks-stats-api
const LC_BASE  = 'https://alfa-leetcode-api.onrender.com'
const GFG_BASE = 'https://geeks-for-geeks-stats-api.vercel.app'

// ─── DSA topics recruiters care about ────────────────────────────────────────
const KEY_TOPICS = {
  'Array'                : 'Arrays',
  'Linked List'          : 'Linked Lists',
  'Hash Table'           : 'Hash Maps',
  'Tree'                 : 'Trees',
  'Binary Tree'          : 'Binary Trees',
  'Graph'                : 'Graphs',
  'Dynamic Programming'  : 'Dynamic Programming',
  'Depth-First Search'   : 'DFS',
  'Breadth-First Search' : 'BFS',
  'Binary Search'        : 'Binary Search',
  'Two Pointers'         : 'Two Pointers',
  'Sliding Window'       : 'Sliding Window',
  'Stack'                : 'Stack',
  'Queue'                : 'Queue',
  'Heap (Priority Queue)': 'Heaps',
  'Greedy'               : 'Greedy',
  'Backtracking'         : 'Backtracking',
  'Sorting'              : 'Sorting',
  'Trie'                 : 'Tries',
  'Bit Manipulation'     : 'Bit Manipulation',
  'Divide and Conquer'   : 'Divide & Conquer',
  'Recursion'            : 'Recursion',
  'String'               : 'Strings',
  'Math'                 : 'Mathematics',
}

const PIE_COLORS = [
  '#8DFF69','#22d3ee','#f59e0b','#a855f7','#ec4899',
  '#10b981','#f97316','#3b82f6','#06b6d4','#84cc16',
  '#8b5cf6','#eab308','#6366f1','#f43f5e','#14b8a6',
  '#fb923c','#4ade80','#c084fc','#0ea5e9','#facc15',
]

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

// ─── Data fetching ────────────────────────────────────────────────────────────
async function loadStats() {
  const safe = (promise) =>
    promise.then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`)
      return r.json()
    }).catch(() => null)

  const [profile, calendar, skills, gfg] = await Promise.all([
    safe(fetch(`${LC_BASE}/userProfile/${LC_USERNAME}`)),
    safe(fetch(`${LC_BASE}/${LC_USERNAME}/calendar`)),
    safe(fetch(`${LC_BASE}/skillStats/${LC_USERNAME}`)),
    safe(fetch(`${GFG_BASE}/?userName=${GFG_USERNAME}`)),
  ])

  return { profile, calendar, skills, gfg }
}

// ─── Heatmap helpers ──────────────────────────────────────────────────────────
const toKey = (date) => {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

const buildHeatmap = (calendarStr) => {
  const raw     = calendarStr ? JSON.parse(calendarStr) : {}
  const dateMap = {}

  Object.entries(raw).forEach(([ts, cnt]) => {
    const d   = new Date(parseInt(ts, 10) * 1000)
    const key = toKey(d)
    dateMap[key] = (dateMap[key] || 0) + cnt
  })

  const today = new Date()
  today.setHours(23, 59, 59, 999)

  const start = new Date()
  start.setFullYear(start.getFullYear() - 1)
  start.setHours(0, 0, 0, 0)
  start.setDate(start.getDate() - start.getDay()) // back to Sunday

  const totalWeeks = Math.ceil(((today - start) / 86_400_000 + 1) / 7)
  const weeks      = []

  for (let w = 0; w < totalWeeks; w++) {
    const week = []
    for (let d = 0; d < 7; d++) {
      const cur = new Date(start)
      cur.setDate(start.getDate() + w * 7 + d)
      if (cur > today) {
        week.push({ isValid: false, count: 0, date: '', month: 0 })
      } else {
        const key = toKey(cur)
        week.push({ isValid: true, date: key, count: dateMap[key] || 0, month: cur.getMonth() })
      }
    }
    weeks.push(week)
  }
  return weeks
}

const getMonthLabels = (weeks) => {
  const labels = []
  let last = -1
  weeks.forEach((week, i) => {
    const first = week.find(d => d.isValid)
    if (first && first.month !== last) {
      labels.push({ weekIndex: i, month: first.month })
      last = first.month
    }
  })
  return labels
}

const cellBg = (count) => {
  if (count === 0) return 'bg-white/5'
  if (count <= 2)  return 'bg-[#8DFF69]/25'
  if (count <= 5)  return 'bg-[#8DFF69]/50'
  if (count <= 9)  return 'bg-[#8DFF69]/75'
  return 'bg-[#8DFF69]'
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────
const PieTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#0d0d0d] border border-white/10 rounded-xl px-3 py-2 shadow-xl text-sm">
      <p className="text-white font-medium">{payload[0].name}</p>
      <p className="text-[#8DFF69] mt-0.5">{payload[0].value} solved</p>
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────
const CodingStats = () => {
  const [stats,     setStats]     = useState(null)
  const [loading,   setLoading]   = useState(true)
  const [hoverDay,  setHoverDay]  = useState(null)
  const [activeIdx, setActiveIdx] = useState(null)

  useEffect(() => {
    loadStats()
      .then(setStats)
      .finally(() => setLoading(false))
  }, [])

  // ── Loading ────────────────────────────────────────────────────────────────
  if (loading) return (
    <div className="flex flex-col items-center justify-center py-24 gap-3">
      <div className="w-10 h-10 border-2 border-[#8DFF69]/20 border-t-[#8DFF69] rounded-full animate-spin" />
      <span className="text-white/30 text-sm">Fetching live coding stats…</span>
    </div>
  )

  const { profile, calendar, skills, gfg } = stats || {}

  // ── Derived values ─────────────────────────────────────────────────────────
  const lcTotal     = profile?.totalSolved     ?? 0
  const lcEasy      = profile?.easySolved      ?? 0
  const lcMedium    = profile?.mediumSolved     ?? 0
  const lcHard      = profile?.hardSolved      ?? 0

  const gfgTotal    = gfg?.info?.totalProblemsSolved
                    ?? (gfg?.solvedStats
                        ? Object.values(gfg.solvedStats).reduce((s, v) => s + (v?.count || 0), 0)
                        : 0)

  const totalSolved  = lcTotal + gfgTotal
  const activeDays   = calendar?.totalActiveDays ?? 0
  const maxStreak    = calendar?.streak          ?? 0
  const totalSubmits = calendar?.submissionCalendar
    ? Object.values(JSON.parse(calendar.submissionCalendar)).reduce((a, b) => a + b, 0)
    : 0

  // ── Heatmap ────────────────────────────────────────────────────────────────
  const weeks       = buildHeatmap(calendar?.submissionCalendar ?? null)
  const monthLabels = getMonthLabels(weeks)

  // ── Pie chart data ─────────────────────────────────────────────────────────
  const tagMap = {}
  ;[
    ...(skills?.tagProblemCounts?.fundamental   ?? []),
    ...(skills?.tagProblemCounts?.intermediate  ?? []),
    ...(skills?.tagProblemCounts?.advanced      ?? []),
  ].forEach(({ tagName, problemsSolved }) => {
    const display = KEY_TOPICS[tagName]
    if (display && problemsSolved > 0)
      tagMap[display] = (tagMap[display] || 0) + problemsSolved
  })

  const pieData = Object.entries(tagMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 14)
    .map(([name, value]) => ({ name, value }))

  const maxPie = pieData[0]?.value || 1

  // ────────────────────────────────────────────────────────────────────────────
  return (
    <div className="mt-16 space-y-6">

      {/* ── Stat Cards ─────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Total Solved */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#8DFF69]/30 transition-all duration-300 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8DFF69]/0 to-[#8DFF69]/3 group-hover:from-[#8DFF69]/5 group-hover:to-[#8DFF69]/5 rounded-2xl pointer-events-none transition-all duration-300" />
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
              <span className="text-white/50 text-sm">Total Questions Solved</span>
              <span className="text-[10px] text-[#8DFF69]/80 bg-[#8DFF69]/10 border border-[#8DFF69]/20 px-2 py-0.5 rounded-full">
                LeetCode + GFG
              </span>
            </div>
            <div className="text-5xl font-bold text-white tracking-tight">{totalSolved}</div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {[
                { label: 'LeetCode', count: lcTotal,  color: 'text-orange-400' },
                { label: 'GFG',      count: gfgTotal, color: 'text-green-400'  },
              ].map(({ label, count, color }) => (
                <div key={label} className="bg-white/5 rounded-xl p-3">
                  <div className={`text-xs mb-1 ${color}`}>{label}</div>
                  <div className="text-white font-semibold text-xl">{count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#8DFF69]/30 transition-all duration-300 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8DFF69]/0 to-[#8DFF69]/3 group-hover:from-[#8DFF69]/5 group-hover:to-[#8DFF69]/5 rounded-2xl pointer-events-none transition-all duration-300" />
          <div className="relative z-10">
            <span className="text-white/50 text-sm">Coding Activity</span>
            <div className="text-5xl font-bold text-white tracking-tight mt-3">{activeDays}</div>
            <div className="text-white/40 text-xs mt-1">Total Active Days</div>
            <div className="mt-5 flex items-end gap-6">
              <div>
                <div className="text-3xl font-bold text-[#8DFF69]">{maxStreak}</div>
                <div className="text-white/40 text-xs mt-0.5">Max Streak 🔥</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">{totalSubmits}</div>
                <div className="text-white/40 text-xs mt-0.5">Total Submissions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#8DFF69]/30 transition-all duration-300 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8DFF69]/0 to-[#8DFF69]/3 group-hover:from-[#8DFF69]/5 group-hover:to-[#8DFF69]/5 rounded-2xl pointer-events-none transition-all duration-300" />
          <div className="relative z-10">
            <span className="text-white/50 text-sm">Difficulty Breakdown</span>
            <div className="mt-5 space-y-4">
              {[
                { label: 'Easy',   count: lcEasy,   pct: lcTotal ? (lcEasy   / lcTotal) * 100 : 0, bar: 'bg-emerald-400', txt: 'text-emerald-400' },
                { label: 'Medium', count: lcMedium, pct: lcTotal ? (lcMedium / lcTotal) * 100 : 0, bar: 'bg-amber-400',   txt: 'text-amber-400'   },
                { label: 'Hard',   count: lcHard,   pct: lcTotal ? (lcHard   / lcTotal) * 100 : 0, bar: 'bg-rose-400',   txt: 'text-rose-400'    },
              ].map(({ label, count, pct, bar, txt }) => (
                <div key={label}>
                  <div className="flex justify-between items-center text-sm mb-1.5">
                    <span className={txt}>{label}</span>
                    <span className="text-white/60">{count}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${bar} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── Heatmap ─────────────────────────────────────────────────────────── */}
      <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#8DFF69]/30 transition-all duration-300 overflow-hidden">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-white font-medium">Coding Activity Heatmap</h3>
          <span className="text-white/30 text-xs">LeetCode · last 12 months</span>
        </div>

        <div className="overflow-x-auto pb-1">
          <div className="min-w-max">

            {/* Month labels */}
            <div className="relative h-4 mb-1.5" style={{ paddingLeft: '36px' }}>
              {monthLabels.map(({ weekIndex, month }) => (
                <span
                  key={`m-${weekIndex}`}
                  className="absolute text-[10px] text-white/40"
                  style={{ left: `${36 + weekIndex * 13}px` }}
                >
                  {MONTHS[month]}
                </span>
              ))}
            </div>

            <div className="flex gap-[3px]">
              {/* Day labels */}
              <div className="flex flex-col gap-[3px] w-8 shrink-0">
                {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d, i) => (
                  <div key={d} className="h-[10px] flex items-center justify-end pr-1">
                    {(i === 1 || i === 3 || i === 5) && (
                      <span className="text-[9px] text-white/25">{d}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Grid */}
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((cell, di) =>
                    !cell.isValid ? (
                      <div key={di} className="w-[10px] h-[10px]" />
                    ) : (
                      <div
                        key={di}
                        className={`w-[10px] h-[10px] rounded-[2px] ${cellBg(cell.count)} hover:ring-1 hover:ring-[#8DFF69]/60 hover:scale-125 cursor-pointer transition-all duration-100`}
                        onMouseEnter={() => setHoverDay(cell)}
                        onMouseLeave={() => setHoverDay(null)}
                      />
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend + hover info */}
        <div className="flex items-center justify-between mt-3">
          <div className="h-4">
            {hoverDay && (
              <span className="text-xs text-white/40">
                {hoverDay.date}:&nbsp;
                <span className="text-[#8DFF69] font-medium">{hoverDay.count}</span>
                &nbsp;submission{hoverDay.count !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-white/30">Less</span>
            {[0, 2, 5, 8, 12].map(v => (
              <div key={v} className={`w-[10px] h-[10px] rounded-[2px] ${cellBg(v)}`} />
            ))}
            <span className="text-[10px] text-white/30">More</span>
          </div>
        </div>
      </div>

      {/* ── DSA Pie Chart ────────────────────────────────────────────────────── */}
      {pieData.length > 0 && (
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#8DFF69]/30 transition-all duration-300 overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-medium">DSA Topic Analysis</h3>
            <span className="text-white/30 text-xs">LeetCode solved by topic</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%" cy="50%"
                    innerRadius={75}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                    onMouseEnter={(_, i) => setActiveIdx(i)}
                    onMouseLeave={() => setActiveIdx(null)}
                  >
                    {pieData.map((entry, i) => (
                      <Cell
                        key={entry.name}
                        fill={PIE_COLORS[i % PIE_COLORS.length]}
                        opacity={activeIdx === null || activeIdx === i ? 1 : 0.35}
                        stroke="transparent"
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2.5">
              {pieData.map((entry, i) => (
                <div
                  key={entry.name}
                  className="flex items-center gap-3 cursor-default"
                  onMouseEnter={() => setActiveIdx(i)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0 transition-transform duration-150"
                    style={{
                      backgroundColor: PIE_COLORS[i % PIE_COLORS.length],
                      transform: activeIdx === i ? 'scale(1.4)' : 'scale(1)',
                    }}
                  />
                  <span
                    className="text-sm flex-1 transition-colors duration-150"
                    style={{ color: activeIdx === i ? '#fff' : 'rgba(255,255,255,0.55)' }}
                  >
                    {entry.name}
                  </span>
                  <div className="w-20 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width          : `${(entry.value / maxPie) * 100}%`,
                        backgroundColor: PIE_COLORS[i % PIE_COLORS.length],
                        opacity        : activeIdx === null || activeIdx === i ? 1 : 0.25,
                      }}
                    />
                  </div>
                  <span className="text-sm text-white/60 w-7 text-right tabular-nums">
                    {entry.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default CodingStats