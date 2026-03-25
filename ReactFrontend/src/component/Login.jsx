import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API_BASE = 'http://localhost:4007'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage(null)
    setLoading(true)
    try {
      const response = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      const isSuccess = data.msg === 'Student login Successfully'
      if (isSuccess) {
        setMessage({ text: data.msg, type: 'success' })
        setTimeout(() => navigate('/dashboard'), 1000)
      } else {
        setMessage({ text: data.msg, type: 'danger' })
      }
    } catch {
      setMessage({ text: 'Unable to connect to the server. Is it running?', type: 'danger' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '420px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Welcome Back</h2>
          <p className="text-muted">Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <a href="#" className="text-decoration-none small">
              Forgot password?
            </a>
          </div>
          {message && (
            <div className={`alert alert-${message.type} py-2`} role="alert">
              {message.text}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-semibold"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <hr className="my-4" />
        <p className="text-center text-muted small mb-0">
          Don&apos;t have an account?{' '}
          <a href="/registration" className="text-decoration-none fw-semibold">
            Register here
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login