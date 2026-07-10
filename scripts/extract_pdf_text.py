from pathlib import Path
import sys

pdf_path = Path("public/HISTORIA T DENT.pdf")
text_out = Path(".pdf_text_extracted.txt")

try:
    from pypdf import PdfReader
except Exception:
    import subprocess, sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"]) 
    from pypdf import PdfReader

reader = PdfReader(str(pdf_path))
texts = []
for page in reader.pages:
    try:
        texts.append(page.extract_text() or "")
    except Exception:
        texts.append("")

text = "\n\n".join(texts)
text_out.write_text(text, encoding='utf-8')
print(f"WROTE:{text_out}")
