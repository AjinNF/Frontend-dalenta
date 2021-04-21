import axios from 'axios'

export default axios.create({
    baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
    headers: {
        'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmciLCJpYXQiOjE2MDI3OTIzMTEsImV4cCI6MTYwMzM5NzExMX0.zFMgos-jASqCyyu5aSgkgD3PhXhzTARRZqx_5g5frww',
    },
})