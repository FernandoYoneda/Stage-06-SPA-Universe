import { Router } from './router.js'
    
const router = new Router()
router.add("/", "/pages/home.html", "home")
router.add("/universe", "/pages/universe.html", "universe")
router.add("/explorer", "/pages/explorer.html", "explorer")
router.add(404,"/pages/404.html", "home")      
  
router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
  