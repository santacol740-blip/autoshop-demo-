import { Download, Package, CheckCircle } from 'lucide-react';

export function DownloadPage() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/project-download.zip';
    link.download = 'auto-repair-project.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-5">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-12 shadow-2xl text-center max-w-lg w-full">
        <div className="w-16 h-16 bg-sky-500 rounded-xl flex items-center justify-center mx-auto mb-6">
          <Package className="w-8 h-8 text-white" />
        </div>

        <h1 className="text-3xl font-bold text-slate-100 mb-2 tracking-tight">
          Auto Repair Project
        </h1>
        <p className="text-slate-400 text-sm mb-8">
          Complete source code ready for GitHub and Vercel
        </p>

        <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 mb-8">
          <p className="font-semibold text-slate-200 font-mono text-sm mb-2">
            project-download.zip
          </p>
          <div className="flex justify-center gap-5 text-slate-500 text-xs">
            <span>87 files</span>
            <span>121 KB</span>
            <span>Production-ready</span>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2.5 bg-sky-500 hover:bg-sky-600 text-white px-10 py-4 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/20 active:translate-y-0"
        >
          <Download className="w-5 h-5" />
          Download ZIP
        </button>

        <div className="mt-8 space-y-2.5 text-left">
          {[
            'Complete source code (src/, pages/, components/)',
            'All config (package.json, vite, tailwind, tsconfig)',
            'Vercel deployment config included',
            'No secrets or node_modules',
          ].map((text) => (
            <div key={text} className="flex items-center text-slate-400 text-sm">
              <CheckCircle className="w-4 h-4 text-sky-500 mr-3 flex-shrink-0" />
              {text}
            </div>
          ))}
        </div>

        <div className="h-px bg-slate-700 my-8" />

        <div className="text-left text-slate-400 text-xs space-y-1.5 leading-relaxed">
          <p><span className="inline-flex items-center justify-center w-5 h-5 bg-slate-700 rounded-full text-sky-400 text-[10px] font-bold mr-2">1</span> <strong className="text-slate-200">Extract ZIP</strong> and upload contents to a new GitHub repo</p>
          <p><span className="inline-flex items-center justify-center w-5 h-5 bg-slate-700 rounded-full text-sky-400 text-[10px] font-bold mr-2">2</span> <strong className="text-slate-200">Import to Vercel</strong> at vercel.com/new</p>
          <p><span className="inline-flex items-center justify-center w-5 h-5 bg-slate-700 rounded-full text-sky-400 text-[10px] font-bold mr-2">3</span> <strong className="text-slate-200">Run:</strong> npm install && npm run build</p>
        </div>
      </div>
    </div>
  );
}