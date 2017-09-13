import json
import gzip
import pandas as pd


# convert to 'strict' json
def parse_to_json(path):
    # TODO: check if already unzipped
    g = gzip.open(path, 'r')
    for l in g:
        yield json.dumps(eval(l))

def parse_to_pandas(path):
    g = gzip.open(path, 'rb')
    for l in g:
        yield eval(l)


def getDF(path):
    i = 0
    df = {}
    for d in parse_to_pandas(path):
        df[i] = d
        i += 1
        return pd.DataFrame().from_dict(df, orient='index')