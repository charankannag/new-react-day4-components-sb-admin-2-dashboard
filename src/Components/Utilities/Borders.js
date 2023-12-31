import Sidebar from "../../Pages/Sidebar"
import Topbar from "../../Pages/Topbar"


export default function Borders(){
    return  <div id="wrapper">
    <Sidebar></Sidebar>
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <Topbar></Topbar>
      <div className='container-fluid'></div>
    <div class="container-fluid">

   
    <h1 class="h3 mb-1 text-gray-800">Border Utilities</h1>
    <p class="mb-4">Bootstrap's default utility classes can be found on the official <a
            href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
        below were created to extend this theme past the default utility classes built into Bootstrap's
        framework.</p>

    
    <div class="row">

      
        <div class="col-lg-6">

            <div class="card mb-4 py-3 border-left-primary">
                <div class="card-body">
                    .border-left-primary
                </div>
            </div>

            <div class="card mb-4 py-3 border-left-secondary">
                <div class="card-body">
                    .border-left-secondary
                </div>
            </div>

            <div class="card mb-4 py-3 border-left-success">
                <div class="card-body">
                    .border-left-success
                </div>
            </div>

            <div class="card mb-4 py-3 border-left-info">
                <div class="card-body">
                    .border-left-info
                </div>
            </div>

            <div class="card mb-4 py-3 border-left-warning">
                <div class="card-body">
                    .border-left-warning
                </div>
            </div>

            <div class="card mb-4 py-3 border-left-danger">
                <div class="card-body">
                    .border-left-danger
                </div>
            </div>

            <div class="card mb-4 py-3 border-left-dark">
                <div class="card-body">
                    .border-left-dark
                </div>
            </div>

        </div>

       
        <div class="col-lg-6">

            <div class="card mb-4 py-3 border-bottom-primary">
                <div class="card-body">
                    .border-bottom-primary
                </div>
            </div>

            <div class="card mb-4 py-3 border-bottom-secondary">
                <div class="card-body">
                    .border-bottom-secondary
                </div>
            </div>

            <div class="card mb-4 py-3 border-bottom-success">
                <div class="card-body">
                    .border-bottom-success
                </div>
            </div>

            <div class="card mb-4 py-3 border-bottom-info">
                <div class="card-body">
                    .border-bottom-info
                </div>
            </div>

            <div class="card mb-4 py-3 border-bottom-warning">
                <div class="card-body">
                    .border-bottom-warning
                </div>
            </div>

            <div class="card mb-4 py-3 border-bottom-danger">
                <div class="card-body">
                    .border-bottom-danger
                </div>
            </div>

            <div class="card mb-4 py-3 border-bottom-dark">
                <div class="card-body">
                    .border-bottom-dark
                </div>
            </div>

        </div>

    </div>
    <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; Your Website 2020</span>
                </div>
            </div>

            </footer>
</div>
</div>
</div>
</div>
}